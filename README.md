# take-home-challenge-ctvo

This app:

- takes a MVC/hexagonal-ish approach with schemas, models, routes, and controllers
  separated in a clean and maintainable way
- uses a `docker-compose` dev environment for parity and simplicity

## Running

1. [Install Docker Desktop](https://www.docker.com)
2. Run `docker-compose up`

### Test requests

```bash
# over 21
curl localhost:8080/users/1

# 21 and under
curl localhost:8080/users/2

# bad ID
curl localhost:8080/users/abc

# bad route
curl localhost:8080/asdf
```
