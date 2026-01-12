import openai
import os

# Create OpenAI client
client = openai.OpenAI(api_key=os.getenv("OPENAI_API_KEY", "your-openai-key-here"))

def process_with_openai(prompt: str) -> str:
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
            max_tokens=150
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        return f"Error: {str(e)}"