export default function Courses({user}) {
  return (
    <div className="bounds">
      {
        user ?
          <div className="grid-100">
            <h1>Welcome back!</h1>
            <p>Let's get started!</p>
            
          </div>
          :
          <div className="grid-100">
            <h1>Welcome to the Main Page</h1>
            <p>Please Login to Continue</p>

          </div>
      }
      <button className="button">Click here for Dark Mode</button>
    </div>
  );
};
