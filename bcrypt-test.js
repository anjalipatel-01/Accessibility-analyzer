import bcrypt from "bcryptjs";

const plainText = "test123";
const hash = "$2b$10$O4AN0IgqNqcPmwfmqltsQuIpMSJ1/G7HNLUr6Bb4ZTr9v4tUhQbse";

bcrypt.compare(plainText, hash).then(result => {
  console.log("✅ Do they match?:", result); // should now say: true
  
});