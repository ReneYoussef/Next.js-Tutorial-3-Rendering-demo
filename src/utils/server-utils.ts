import "server-only"
// if anyone tries to import this module to a client component the build will failed immediately
// preventing any potential issues related to exposing server side code to the client 

export const ServerSideFunction =() => {
    console.log(
        `use multiple libraries,
            use enviroment variable,
            interact with a database,
            process confidential information`
    )
    return "server result"
}