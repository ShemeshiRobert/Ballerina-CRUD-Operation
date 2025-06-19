function CreateUser({closeCreateUser}) {
  return (
    <div className="create-user-contaiiner-background">
        <div className="create-user-container">
            <button className="close-button" onClick={()=> closeCreateUser(false)}>❌</button>
            <h2>Add User</h2>
            <form>
                <label>
                First Name:
                <input type="text" name="first_name" required />
                </label>
                <br />
                <label>
                Last Name:
                <input type="text" name="last_name" required />
                </label>
                <br />
                <label>
                Email:
                <input type="email" name="email" required />
                </label>
                <br />
                <label>
                Password:
                <input type="text" name="firstName" required />
                </label>
                <br />
                <label>
                Phone:
                <input type="text" name="phone" required />
                </label>
                <button type="submit">Create User</button>
            </form>
        </div>
    </div>
    
  );
}
export default CreateUser;