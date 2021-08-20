FROM python:3.9

# Install dependencies separately so they are cached
COPY requirements.txt /req.txt
RUN pip install -r req.txt

ARG PORT=8000
ENV PORT=$PORT
EXPOSE $PORT

COPY . /app
WORKDIR /app
RUN pip install -e .
ENTRYPOINT exec python nglp/main.py