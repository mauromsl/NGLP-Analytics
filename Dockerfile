FROM python:3.9

EXPOSE 8000

COPY . /app
WORKDIR /app

RUN pip install -e .
CMD ["uvicorn", "nglp.main:app", "--host", "0.0.0.0", "--port", "8000"]