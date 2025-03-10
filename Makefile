up:
	docker-compose up -d

down:
	docker-compose down

rebuild:
	docker-compose up --build -d

test:
	docker-compose run --rm app npm test

.PHONY: up down rebuild logs ps restart test