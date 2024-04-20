export default function Bottom(){
    const currentYear = new Date().getFullYear();
    return(
        <div className="container-fluid py-1 text-center text-white" style={{ 'backgroundColor': 'rgb(123 88 114)' }}>
            <p><strong>Copyright &copy; 2014-{currentYear} <a href="#" className="text-white text-decoration-none " >Hotel Management System</a>.</strong> All rights reserved.</p>
        </div>
    );
}