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

test:
	docker-compose -f $(DOCKER_COMPOSE_FILE) run --rm calculate_app npm test

setup:
	@if [ ! -f .env ]; then cp .env.example .env; fi
	$(MAKE) up

.PHONY: up down rebuild logs ps restart test