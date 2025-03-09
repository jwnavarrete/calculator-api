# Makefile for managing Docker Compose
# Variables
DOCKER_COMPOSE_FILE = docker-compose.yml

# Commands
up:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

down:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down

rebuild:
	docker-compose -f $(DOCKER_COMPOSE_FILE) up --build -d

logs:
	docker-compose -f $(DOCKER_COMPOSE_FILE) logs -f

ps:
	docker-compose -f $(DOCKER_COMPOSE_FILE) ps

restart:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down
	docker-compose -f $(DOCKER_COMPOSE_FILE) up -d

.PHONY: up down rebuild logs ps restart