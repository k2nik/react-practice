import { Header } from './components/Header';
import { Home } from './Home';
import { Member } from './Member';
import { Admin } from './Admin';
import { Board } from './Board';
import { BoardList } from './board/BoardList';
import { BoardAdd } from './board/BoardAdd';
import { BoardView } from './board/BoardView';
import { BoardEdit } from './board/BoardEdit';
import { BoardDelete } from './board/BoardDelete';
import { HashRouter, Routes, Route, Link, NavLink, useParams } from 'react-router-dom';

//App.jsx

//App > 시작 페이지(X), 메인 화면 컴포넌트, 레이아웃(O)
//App + Header + Home > 시작 페이지(O). 이렇게 한번에 제작 > 나중에 여러개의 컴포넌트 + 여러개의 파일로 쪼개면 된다.
//Hooks 신경(X) > 화면에 보이는 태그(리액트 엘리먼트 > JSX) 구현 > 이벤트 or 훅 처리



//Step 1. 모든걸 하나의 컴포넌트로 제작
// function App() {

//     return (
//         <>
//             <header>
//                 <h1 className="main">Toy Project <small>React</small></h1>
//                 <ul>
//                     <li><a href="">Home</a></li>
//                     <li><a href="">Member</a></li>
//                     <li><a href="">Admin</a></li>
//                     <li><a href="">Board</a></li>
//                 </ul>
//             </header>
//             <div>
//                 <h2>시작 페이지</h2>
//                 <p>내용입니다.</p>
//                 <p>내용입니다.</p>
//                 <p>내용입니다.</p>
//                 <p>내용입니다.</p>
//                 <p>내용입니다.</p>
//             </div>
//         </>
//     );
// }



//2. 각각의 컴포넌트로 분리

// function Header() {

//     return (
//         <header>
//             <h1 className="main">Toy Project <small>React</small></h1>
//             <ul>
//                 <li><a href="">Home</a></li>
//                 <li><a href="">Member</a></li>
//                 <li><a href="">Admin</a></li>
//                 <li><a href="">Board</a></li>
//             </ul>
//         </header>
//     );
// }

// function Home() {

//     return (
//         <div>
//             <h2>시작 페이지</h2>
//             <p>내용입니다.</p>
//             <p>내용입니다.</p>
//             <p>내용입니다.</p>
//             <p>내용입니다.</p>
//             <p>내용입니다.</p>
//         </div>
//     );
// }


//3. 각각의 컴포넌트 > 물리적 파일로 분리(*.jsx)
//- Header.jsx, Home.jsx
//- import

// function App() {

//     return (
//         <>
//             <Header />
//             <Home />
//         </>
//     );
// }

function App() {

    return (
         <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/member" element={<Member />} />
                <Route path="/admin" element={<Admin />} />
                
                <Route path="/board" element={<Board />}>
                    <Route index element={<BoardList />} />
                    <Route path="add" element={<BoardAdd />} />
                    <Route path="view/:seq" element={<BoardView />} />
                    <Route path="edit/:seq" element={<BoardEdit />} />
                    <Route path="del/:seq" element={<BoardDelete />} />
                </Route> 
                {/* Router를 추가로 중첩하지 않게 수정. */}
                {/* 
                <Route path="/board" element={<BoardList />} />
                <Route path="/board/add" element={<BoardAdd />} />
                <Route path="/board/view/:seq" element={<BoardView />} />
                <Route path="/board/edit/:seq" element={<BoardEdit />} />
                <Route path="/board/del/:seq" element={<BoardDelete />} /> 
                */}
            </Routes>
         </HashRouter>
    );
}


export default App;