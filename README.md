# Takmil School Assessment - NestJS

This project is a REST API developed using NestJS, TypeORM, and PostgreSQL. It provides CRUD operations for managing Schools, Addresses, and Organizations.

## Technologies Used

- **NodeJS**
- **NestJS**
- **TypeORM**
- **PostgreSQL**
- **Postman for API testing**

## Prerequisites

- **Node.js** (v20 or higher)
- **PostgreSQL** database
- **NestJS CLI** (optional, but recommended for development)

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/zainwaseem/takmil-school-assessment.git
   ```
2. **Install dependencies**:
   ```bash
   cd takmil-school-assessment
   npm install
   ```
3. **Configure the PostgreSQL database**:
   - Make sure you have PostgreSQL running and create a database named `takmil` (or use your preferred name).
   - Update the database credentials in `src/app.module.ts`:
     ```typescript
     TypeOrmModule.forRoot({
       type: 'postgres',
       host: 'localhost',
       port: 5432,
       username: 'your_db_username',
       password: 'your_db_password',
       database: 'takmil',
       entities: [School, Address, Organization],
       synchronize: true,
     }),
     ```
4. **Run the application**:
   ```bash
   npm run start
   ```
   The application will start on `http://localhost:3000`.

## API Endpoints

### Schools

- **GET /schools**: Get a list of all schools.
- **GET /schools/:id**: Get details of a specific school.
- **POST /schools**: Create a new school.
- **PUT /schools/:id**: Update an existing school.
- **DELETE /schools/:id**: Delete a school.

### Addresses

- **GET /addresses**: Get a list of all addresses.
- **GET /addresses/:id**: Get details of a specific address.
- **POST /addresses**: Create a new address.
- **PUT /addresses/:id**: Update an existing address.
- **DELETE /addresses/:id**: Delete an address.

### Organizations

- **GET /organizations**: Get a list of all organizations.
- **GET /organizations/:id**: Get details of a specific organization.
- **POST /organizations**: Create a new organization.
- **PUT /organizations/:id**: Update an existing organization.
- **DELETE /organizations/:id**: Delete an organization.

## Testing with Postman

You can test the API using the Postman collection provided in the link below:

- **Postman Collection**: [Postman Collection Link](https://wjiks2-5761.postman.co/workspace/Team-Workspace~166a0f0b-4c2e-41bf-8012-1f55d3d6ffcc/collection/21421518-b7b4dad6-5530-427d-bc07-0feb0783aff1?action=share&creator=21421518)

## Project Structure

- **src/**: Contains the source code.
  - **school/**: Module, service, and controller for School entity.
  - **address/**: Module, service, and controller for Address entity.
  - **organization/**: Module, service, and controller for Organization entity.
  - **app.module.ts**: The main application module that imports all other modules.

## Database Setup

- The project uses TypeORM for database interactions.
- **Synchronize** is set to `true` in `TypeOrmModule` configuration, which automatically syncs the database schema. This should be turned off in production.

## Running Tests

- There are no unit tests implemented for this project yet. Testing has been done manually using Postman.

## GitHub Repository

- **Repository**: [Takmil School Assessment GitHub](https://github.com/zainwaseem/takmil-school-assessment.git)

---

Feel free to modify or expand the README as needed! Let me know if you need anything else.
