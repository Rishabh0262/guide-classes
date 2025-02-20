import { useState } from "react"


const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let handleSubmit = e => {
        // form handler...
        e.preventDefault();
        console.table({name, email, password})
    }

    return (
        <>
            <h1 className="jumbotron bg-primary text-center square pt-4 pb-4"> Register </h1>
            {/* <p>Register page</p> */}

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <label className="mt-5" name="userName">User name</label>
                    <input className="form-control mb-4 " type="text" name="userName" value={name } onChange={(e) => setName(e.target.value)} required></input>

                    <label name="userEmail">E-mail</label>
                    <input className="form-control mb-4 " type="email" name="userEmail" value={email} onChange={(e) => setEmail(e.target.value) } required />

                    <label name="userPassword">Password</label>
                    <input className="form-control mb-4 " type="password" name="userPassword" value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button className="btn btn-block btn-primary">Submit</button>
                </form>
            </div>
        </>

    )

}

export default Register