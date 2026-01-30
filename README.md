# 🌍 Vaibhavi World – AWS Dockerized Web Application

A complete **end‑to‑end cloud deployment project** demonstrating how to build, containerize, deploy, and scale a simple **frontend + backend web application** using **Docker, AWS EC2, RDS, Load Balancer, and Auto Scaling**.

This project is designed with **real‑world practices** and **interview‑ready architecture** in mind.

---

## 🚀 Project Overview

**Vaibhavi World** is a simple web application consisting of:

* Frontend UI
* Backend server (Node.js)
* MySQL database (AWS RDS)

The application is containerized using Docker and deployed on AWS EC2, fronted by an Application Load Balancer with Auto Scaling for high availability and cost optimization.

---

## 🧱 Architecture

**Flow:**

User → Application Load Balancer → EC2 (Docker Containers) → RDS MySQL

**Key AWS Services Used:**

* EC2 (t2.micro / t3.micro – Free Tier)
* RDS (MySQL)
* Application Load Balancer (ALB)
* Auto Scaling Group (ASG)
* Elastic IP / Public DNS
* Security Groups & VPC

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js (Express)
* **Database:** MySQL (AWS RDS)
* **Containerization:** Docker
* **Cloud Platform:** AWS
* **Load Balancing:** Application Load Balancer
* **Scaling:** Auto Scaling Group

---

## 🔗 Application Access (For Reviewers / HR)

The application is publicly accessible via the **Application Load Balancer (ALB) DNS**.

👉 *URL:*
`http://vaibhavi-alb-1393361818.eu-north-1.elb.amazonaws.com/`

> **Note:** Direct EC2 Public IP access is intentionally disabled for security reasons. The ALB is the single entry point to the application, following AWS best practices.

---

## 📦 Features Implemented

### ✅ Application

* Simple frontend + backend app
* Backend successfully connects to MySQL RDS
* Environment‑based configuration

### ✅ Docker

* Dockerfile created
* Application runs inside Docker container
* Ports exposed correctly
* Containers auto‑start on reboot using restart policy

### ✅ AWS Deployment

* EC2 instance launched (Free‑tier eligible)
* Docker installed on EC2
* Containers running on EC2

### ✅ Application Access

* App accessible via:

  * EC2 Public IP / DNS
  * Application Load Balancer DNS

### ✅ Load Balancer & Auto Scaling

* Application Load Balancer configured
* Target Group attached
* Auto Scaling Group configured
* Scaling based on CPU utilization

### ✅ Cost Optimization

* Free‑tier eligible resources
* Minimal instance size
* Auto Scaling to avoid over‑provisioning

---

## 🔧 Setup & Deployment Steps

### 1️⃣ Clone Repository

```bash
git clone https://github.com/<your-username>/vaibhavi-world.git
cd vaibhavi-world
```

### 2️⃣ Build Docker Image

```bash
docker build -t vaibhavi-world-app .
```

### 3️⃣ Run Docker Container

```bash
docker run -d -p 80:3000 --restart unless-stopped vaibhavi-world-app
```

### 4️⃣ Verify Application

```bash
curl http://localhost
```

---

## 🗄️ Database Configuration (RDS MySQL)

* Database created using AWS RDS
* RDS is **not publicly accessible** (best practice)
* EC2 Security Group allowed to connect on port **3306**

Backend connects using:

* RDS Endpoint
* DB Username & Password
* Database Name

---

## 🛡️ Security Best Practices Followed

* ❌ No `0.0.0.0/0` exposure for database
* ✅ ALB Security Group → EC2 Security Group
* ✅ EC2 Security Group → RDS Security Group
* ✅ Principle of least privilege

---

## 🧪 Troubleshooting (Interview‑Ready)

### App not accessible

* Fixed EC2 security group inbound rules

### Container running but port not reachable

* Bound app to `0.0.0.0`
* Corrected Docker port mapping

### ALB health check failing

* Fixed health check path and port

### Database connection error

* Updated RDS security group to allow EC2

### Containers stopped after reboot

* Used Docker restart policy

---

## 📈 Future Improvements

* Use Docker Compose
* Add CI/CD pipeline (GitHub Actions)
* Store secrets using AWS Secrets Manager
* Migrate to ECS / EKS
* Add HTTPS using ACM

---

## 👩‍💻 Author

**Vaibhavi Ghadge**
Cloud & DevOps Enthusiast ☁️🐳

---

## ⭐ If you like this project

Give it a ⭐ on GitHub — it motivates me to build more!

---

### 📌 Note

This project was built for **learning, real‑world deployment practice, and interview preparation**.
