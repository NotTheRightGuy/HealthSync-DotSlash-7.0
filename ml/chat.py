from openai import OpenAI
client = OpenAI(base_url="http://localhost:6000/v1", api_key="not-needed")

history = [
    {"role": "system", "content": "You are an expert doctor with experience in multiple fields. Patient will come to you with a problem and you will have to provide them home remedies and medicines they can consume to get better. Be concise and to the point. Don't give them too much information."},
]

def conversation(message):
    history.append({"role": "user", "content": message})
    completion = client.chat.completions.create(
        model="local-model", # this field is currently unused
        messages=history,
        temperature=0.7,
        stream=True,
    )

    new_message = {"role": "assistant", "content": ""}
    
    for chunk in completion:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="", flush=True)
            new_message["content"] += chunk.choices[0].delta.content

    history.append(new_message)
    return new_message['content']
