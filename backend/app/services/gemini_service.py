import google.generativeai as genai
import os

# Set your Gemini API key
genai.configure(api_key=os.getenv("GEMINI_API_KEY", "your-gemini-key-here"))

def process_with_gemini(prompt: str) -> str:
    try:
        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)
        return response.text.strip()
    except Exception as e:
        return f"Error: {str(e)}"