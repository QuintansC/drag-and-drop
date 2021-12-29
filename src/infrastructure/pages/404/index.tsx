export default function Error (){
    if(window.location.pathname === '/'+sessionStorage.getItem('usernameTrello')+'/boards'){
        window.location.href = '/'+sessionStorage.getItem('usernameTrello')+'/boards'
    }
    return <div> {window.location.href = '/'}</div>
}