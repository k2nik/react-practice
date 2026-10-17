//src > board > BoardDelete.jsx

import { browser } from "react-dom";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";

function BoardDelete() {

    const {boardList, setBoardList} = useOutletContext();

    const navigate = useNavigate();

    const params = useParams();

    function handleDelete() {

        setBoardList(
            boardList.filter(item => 
                item.seq != params.seq
            )
        )

        navigate('/board');

    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>게시물 삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div>정말 삭제하겠습니까?</div>
                            <span onClick={handleDelete}>삭제하기</span>&nbsp;
                            <Link to={`/board/view/${params.seq}`}>돌아가기</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export { BoardDelete };