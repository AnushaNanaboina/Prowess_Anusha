import './CSS/scoreboard.css'
import image from './123.png'
function Scoreboard(){
    return(
        <div className='main-ctn'>
       <div class="title-ctn">
        <h1 align="center">Scoreboard</h1>
       </div>
       <div className="img-ctn">
        <img src={image}></img>
       </div>
       <div className="table-ctn">
<table>
    <tr>
        <th>Place</th>
        <th>User</th>
        <th>Score</th>
    </tr>
    <tr>
        <td>1</td>
        <td>Sambit Ghosh</td>
        <td>230</td>
    </tr>
    <tr>
        <td>2</td>
        <td>ShuvamoyB</td>
        <td>230</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Swathi</td>
        <td>230</td>
    </tr>
    <tr>
        <td>4</td>
        <td>Swetha</td>
        <td>220</td>
    </tr>
    <tr>
        <td>5</td>
        <td>Swapna</td>
        <td>210</td>
    </tr>
    <tr>
        <td>6</td>
        <td>Sandy</td>
        <td>200</td>
    </tr>
    <tr>
        <td>7</td>
        <td>Ram</td>
        <td>190</td>
    </tr>
</table>
       </div>
        </div>

    )
}
export default Scoreboard;