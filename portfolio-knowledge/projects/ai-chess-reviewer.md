# Project: AI Chess Reviewer

## Overview
An event-driven, real-time chess analysis platform that processes PGN games move-by-move using the Stockfish 16 engine. It delivers instant evaluations, win-probability graphs, and opening theory detection, streamed live to the browser.

## Architecture & Data Flow
Built around an event-driven microservices architecture where no service talks directly to another. All communication runs through Apache Kafka.
1. **User Browser (React UI):** Submits PGN via REST API to Spring Boot.
2. **Spring Boot API (Java 17):** Persists the game to PostgreSQL and publishes a message to the `games-to-analyze` Kafka topic.
3. **Python AI Worker:** Consumes from Kafka. For the first 30 plies, it queries the Lichess Masters Opening Explorer. Beyond that, it runs Stockfish 16 (depth 18) via UCI. It then publishes evaluations back to the `analyzed-moves` Kafka topic.
4. **Spring Boot Broker:** Consumes the `analyzed-moves` topic and immediately pushes the evaluation to the connected React client over a STOMP WebSocket.
5. **Real-Time Client:** Renders evaluations move-by-move, updating win-probability graphs and categorizing moves (Brilliant, Good, Inaccuracy, Mistake, Blunder).

## Tech Stack
- **Frontend:** React 19, Vite 8, TailwindCSS 4, react-chessboard, chess.js, Recharts
- **Backend API:** Java 17, Spring Boot 3.3, Spring Data JPA, Hibernate, @stomp/stompjs
- **Event Streaming:** Apache Kafka (Aiven Cloud, SSL/mTLS secure)
- **AI Worker:** Python 3, python-chess, confluent-kafka, Stockfish 16 (UCI engine)
- **Database:** PostgreSQL 15
- **Infrastructure:** Docker, Docker Compose, Aiven Cloud

## Key Features
- **Real-Time Streaming:** Live move-by-move streaming via WebSockets.
- **Opening Book Detection:** Cross-references the first 15 moves with the Lichess Masters database.
- **Grandmaster-Level Analysis:** Stockfish 16 runs at depth 18.
- **Concurrent Processing:** ThreadPoolExecutor handles multiple games in parallel.
- **Cloud-Native & Secure:** Auto-detects OS for Stockfish binaries, and connects to Aiven Kafka using SSL/mTLS certificates.

## Links
- **GitHub Repository:** [https://github.com/yahyaCodeX/chess-reviewer](https://github.com/yahyaCodeX/chess-reviewer)
