function createLoginTracker(userInfo) {
  let attemptCount = 0;
  let locked = false;

  return (passwordAttempt) => {
    if (locked) {
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else if (attemptCount >= 3) {
      locked = true;
      return `Attempt 3: Login failed`;
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

module.exports = {
  createLoginTracker,
};




module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};