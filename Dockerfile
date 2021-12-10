FROM python:3.9

RUN apt-get update && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs build-essential

# Install dependencies separately so they are cached
COPY requirements.txt /req.txt
RUN pip install -r req.txt

ARG PORT=8000
ENV PORT=$PORT
EXPOSE $PORT

COPY . /app
WORKDIR /app

RUN pip install -e .

RUN cd js && \
    npm install && \
    npm run build-g001

ENTRYPOINT exec python nglp/main.py