import './CSS/users.css';
function Users() {
    return (
        <div className="user-main">
            <table className="table-cnt">
                <tr>
                    <th>User</th>
                    <th>Website</th>
                    <th>Affiliation</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Anusha</td>
                    <td>https://www.google.com</td>
                    <td>affiliation</td>
                    <td>India</td>
                </tr>
                <tr>
                <td>Anu</td>
                    <td>https://www.facebook.com</td>
                    <td>affiliation</td>
                    <td>India</td>
                </tr>
                <td>Anu..</td>
                    <td>https://www.yahoo.com</td>
                    <td>affiliation</td>
                    <td>India</td>
            </table>
        </div>
    );
}
export default Users