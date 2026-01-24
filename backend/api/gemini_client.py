# api/gemini_client.py
import google.generativeai as genai
from django.conf import settings
import json


class GeminiClient:
    """Google Gemini AI client"""
    
    def __init__(self):
        api_key = settings.GEMINI_API_KEY
        model_name = settings.GEMINI_MODEL
        
        self.is_configured = False
        
        if not api_key or api_key == 'your-actual-gemini-api-key-here':
            print("⚠️  WARNING: GEMINI_API_KEY is not set or is using placeholder value.")
            print("   API will work in fallback mode without AI capabilities.")
            print("   Get a Gemini API key from: https://makersuite.google.com/app/apikey")
            self.is_configured = False
            return
        
        try:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel(model_name)
            self.is_configured = True
            
            # Configure safety settings
            self.safety_settings = [
                {
                    "category": "HARM_CATEGORY_HARASSMENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_HATE_SPEECH",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
                {
                    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
                },
            ]
            
            # Generation configuration
            self.generation_config = {
                "temperature": 0.3,
                "top_p": 0.8,
                "top_k": 40,
                "max_output_tokens": 2048,
            }
            
        except Exception as e:
            print(f"⚠️  Error configuring Gemini: {str(e)}")
            self.is_configured = False
    
    def generate_response(self, prompt):
        """Generate response using Gemini"""
        if not self.is_configured:
            return self.get_fallback_response(), 0
        
        try:
            response = self.model.generate_content(
                prompt,
                generation_config=self.generation_config,
                safety_settings=self.safety_settings
            )
            
            return response.text, response.usage_metadata.total_token_count if hasattr(response, 'usage_metadata') else 0
            
        except Exception as e:
            # Log the error and return a fallback response
            print(f"⚠️  Gemini API error: {str(e)}")
            return self.get_fallback_response(), 0
    
    def generate_chat_response(self, messages):
        """Generate response for chat conversation"""
        if not self.is_configured:
            return self.get_fallback_response(), 0
        
        try:
            chat = self.model.start_chat(history=[])
            response = chat.send_message(
                messages[-1]['content'] if messages else "",
                generation_config=self.generation_config,
                safety_settings=self.safety_settings
            )
            
            return response.text, response.usage_metadata.total_token_count if hasattr(response, 'usage_metadata') else 0
            
        except Exception as e:
            print(f"⚠️  Gemini chat error: {str(e)}")
            return self.get_fallback_response(), 0
    
    def get_fallback_response(self):
        """Get fallback response when AI fails or is not configured"""
        return """I apologize, but I'm currently running in fallback mode as the AI service is not fully configured.

As an AI assistant for Nigerian tax matters, here's what I can suggest:

🔧 **Setup Required:**
1. Get a Google Gemini API key from: https://makersuite.google.com/app/apikey
2. Add it to your .env file as: GEMINI_API_KEY=your-key-here
3. Restart the server

📚 **Nigerian Tax Resources:**
1. Official FIRS website: https://www.firs.gov.ng
2. Value Added Tax (VAT) Act
3. Companies Income Tax Act (CITA)
4. Personal Income Tax Act (PITA)
5. FIRS Information Circulars

💼 **For specific tax advice:**
- Consult a licensed Nigerian tax professional
- Review official tax laws and regulations
- Contact FIRS for official guidance

Would you like me to help you with anything else while the AI is being configured?"""
    
    def create_tax_prompt(self, query, legal_sources, user, context):
        """Create a specialized prompt for tax queries"""
        if not self.is_configured:
            return "The AI service is not configured. Please check your API key settings."
        
        prompt = f"""You are MAVEN, an expert AI Tax & Financial Intelligence Assistant for Nigeria.

CRITICAL GUIDELINES:
1. You MUST ONLY provide information based on NIGERIAN tax laws and regulations
2. ALWAYS cite specific laws, acts, sections, and FIRS circulars
3. Explain complex tax concepts in simple, clear language for business owners
4. Provide practical, actionable advice with real-world examples
5. If information is outdated or uncertain, clearly state this and recommend official sources
6. Format responses clearly with sections for Answer, Explanation, Legal Basis, Example, and Next Steps

USER PROFILE:
- Type: {user.get_user_type_display()}
- Company: {user.company_name or 'Not specified'}
- Location: {user.state or 'Not specified'}
- Sector: {user.business_sector or 'Not specified'}
- Subscription: {user.subscription_tier}

RELEVANT NIGERIAN TAX SOURCES:
"""
        
        if legal_sources:
            for source in legal_sources[:5]:  # Limit to 5 most relevant
                prompt += f"\n• {source.reference}: {source.title}"
                if source.effective_date:
                    prompt += f" (Effective: {source.effective_date})"
        else:
            prompt += "\n• General Nigerian tax laws and FIRS guidelines"
        
        prompt += f"""

CONTEXT: {json.dumps(context, indent=2)}

USER QUERY: "{query}"

RESPONSE REQUIREMENTS:
1. Start with a clear, direct answer to the question
2. Provide simple explanation in plain English
3. Cite exact Nigerian laws/references (e.g., "VAT Act, Section 15(2)")
4. Include a practical Nigerian business example if relevant
5. Suggest next steps or compliance actions
6. Mention if consultation with a tax professional is advisable
7. End with a brief disclaimer that this is informational, not legal advice

IMPORTANT: If the query is outside Nigerian tax/finance scope, politely decline and redirect to relevant topics.

NOW, provide your response:"""

        return prompt