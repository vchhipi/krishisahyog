# 🌾 KrishiSahyog

### Making agricultural support easier to find, understand, and use.

KrishiSahyog is a farmer-focused platform that brings essential agricultural support into one simple experience.
It helps users explore government schemes, receive preliminary crop guidance, and discover storage and transportation resources.

---

## Project Preview

<!-- Add your screenshot here -->

![KrishiSahyog Preview](docs/preview.png)

---

## The Problem

Agricultural information is often scattered across multiple platforms.

Farmers may struggle to:

- Find relevant government schemes
- Understand available support
- Identify initial steps for crop problems
- Access storage and transportation resources


---

## Core Features

| Feature | Purpose |
|---|---|
| Government Scheme Discovery | Guided questions to explore potentially relevant schemes |
| Crop Assistance | Preliminary guidance based on crop symptoms |
| Storage & Transportation | Discover support for post-harvest needs |

---

## How It Works

```mermaid
flowchart LR
    A[Open KrishiSahyog] --> B[Choose Support]
    B --> C[Government Schemes]
    B --> D[Crop Assistance]
    B --> E[Storage & Transport]

    C --> F[Answer Questions]
    F --> G[Explore Schemes]

    D --> H[Select Crop & Symptom]
    H --> I[Receive Guidance]

    E --> J[Select Support Type]
    J --> K[Explore Resources]
```

---

## System Architecture

```mermaid
flowchart TD
    A[User] --> B[React + Vite Frontend]
    B --> C[API Endpoint]
    C --> D[AWS Lambda]
    D --> E[Process Request]
    E --> F[JSON Response]
    F --> B
```

---

## Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

### Backend

![AWS Lambda](https://img.shields.io/badge/AWS_Lambda-FF9900?style=for-the-badge&logo=awslambda&logoColor=black)
![AWS SAM](https://img.shields.io/badge/AWS_SAM-FF9900?style=for-the-badge&logo=amazonaws&logoColor=black)
![API Gateway](https://img.shields.io/badge/API_Gateway-FF4F8B?style=for-the-badge&logo=amazonapigateway&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

### Development Tools

- VS Code
- Docker
- Git
- GitHub
- AWS SAM CLI

---

## AWS Integration

The backend is developed and tested locally using AWS SAM.

| Technology | Purpose |
|---|---|
| AWS Lambda | Serverless backend logic |
| AWS SAM | Define, build, and run the application locally |
| API Gateway | API routing through the SAM local environment |
| Docker | Local Lambda execution environment |

### Current API Endpoints

| Endpoint | Function |
|---|---|
| `/resources` | Agricultural resources |
| `/schemes` | Government scheme data |
| `/storage` | Storage-related information |
| `/crop-guidance` | Preliminary crop guidance |

---

## Design Approach

The interface focuses on:

- Clear navigation
- One-question-at-a-time interactions
- Reduced cognitive load
- Progressive disclosure
- Short, readable content
- Consistent visual hierarchy

The goal is to make agricultural support feel more approachable.

---


## Future Scope

<details>
<summary>Potential Improvements</summary>

- Verified and regularly updated scheme information
- Regional language support
- Expert-assisted crop guidance
- Database integration using DynamoDB
- File and image storage using S3
- Monitoring using CloudWatch
- More personalized recommendations

</details>

---

## Disclaimer

Crop guidance is preliminary and should not replace advice from qualified agricultural professionals.

Government scheme information should be verified through official sources before making decisions.

---
