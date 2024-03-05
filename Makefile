# Makefile
.PHONY: build run up stop clean logs sh ps

# Docker-related variables
DOCKER_COMPOSE = docker-compose
DOCKERFILE = Dockerfile

# Build the Docker image
build:
	$(DOCKER_COMPOSE) build

# Run the Docker container
run:
	$(DOCKER_COMPOSE) up -d

# Build and run the Docker container
up:
	$(DOCKER_COMPOSE) up --build -d

# Stop and remove the Docker container
stop:
	$(DOCKER_COMPOSE) down

# Clean up Docker images and volumes
clean:
	$(DOCKER_COMPOSE) down --rmi all

# View the logs
logs:
	$(DOCKER_COMPOSE) logs --tail=100 -f

# Container sh
sh:
	$(DOCKER_COMPOSE) exec backend sh

# Container ps
ps:
	$(DOCKER_COMPOSE) ps