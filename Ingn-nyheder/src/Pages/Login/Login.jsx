import '../../App.scss'

export const Login = () => {



    // "username": "jtreleven5",
    // "password": "zY1nE46Zm",

    return (
        <section className='login'>
            <h2>Login (virker Ikke)</h2>
            <form>
                <label>Brugernavn:
                    <input name="username"></input>
                </label>
                <label htmlFor="">Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Log Ind"  className='logInBtn'/>
            </form>
        </section>
    )

}