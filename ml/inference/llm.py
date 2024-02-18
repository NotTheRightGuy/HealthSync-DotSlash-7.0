from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
load_dotenv()
import os


def generate_feedback(diagnosis):
    prompt = ChatPromptTemplate.from_template(
        """I'm currently suffering from {diagnosis}. You are an expert doctor with years of experience in {diagnosis}.
        Provide me some advice on how to manage this condition. Provide home remedies to help me manage this condition.
        Once you are done with the advice, add 00MEDS00 and then provide me medicines that I can take for this, don't reply
        that you cannot provide medicines. Just prescribe medicine to the best of your knowledge. Start writing advices and
        and make sure advices are no longer than 1 line and add no other keywords.
        Your output should
        look something like this:"
        1. Advice 1 <next>
        2. Advice 2 <next>
        3. Advice 3 <next>
        4. Advice 4 <next>
        00MEDS00
        Medicine 1 <next> Medicine 2 <next> Medicine 3 <next> Medicine 4
        """
    )

    OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
    

    llm = ChatOpenAI(openai_api_key=OPENAI_API_KEY, model_name="gpt-3.5-turbo-0125")
    chain = prompt | llm

    raw_feedback = chain.invoke({"diagnosis": "Dengue"}).content
    feedback = raw_feedback.split("00MEDS00")[0].strip()
    medicines = raw_feedback.split("00MEDS00")[1].strip()
    feedback_array = feedback.split("<next>")
    medicine_array = medicines.split("<next>")
    return [feedback_array, medicine_array]
