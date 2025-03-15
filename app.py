from langchain.agents import create_sql_agent
from langchain.agents.agents_toolkits import SQLDatabaseToolkit
from langchain.sql_database import SQLDatabase
from langchain.chat_models import ChatOpenAI
from langchain.agents.agent_types import agent_types

#api key
KEY = ""

uri = 'mssql+pyobc://sa:G6u&11Cw@localhost:5501/CitizenConnect?driver=ODBC+Driver+17+for+SQL+Server'
database = SQLDatabase.from_uri(uri)

#use gpt 3.5 or 4
llm = ChatOpenAI(model="gpt-3.5-turbo", openai_api_key=KEY)
toolkit=SQLDatabaseToolkit(db=database, llm=llm)


agent_executor=create_sql_agent(
    llm=llm,
    toolkit=toolkit,
    agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True,
    prefix="You are an AI that interacts with a MSSQL database"
)


results = agent_executor("What are some of the users")


print("results")