import "./home.css";

export default function Home({setLoginUser}) {
  return (
    <>
        <div className="homepage">
          <h1>Hello there</h1>
          <div className="button" onClick={() => setLoginUser({})}>Logout</div>
        </div>
    </>
  )
}
