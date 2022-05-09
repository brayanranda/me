import './App.css';
import about from './pages/about/about';
import blog from './pages/blog/blog';
import cursos from './pages/cursos/cursos';
import index from './pages/home/index';
import projects from './pages/projects/projects';
import post from './pages/post/post';

import { Route } from "wouter";


export default function App() {
  return (
    <div className="App">
			<Route path="/" component={index} />
      <Route path="/about" component={about} />
			<Route path="/blog" component={blog} />
      <Route path="/cursos" component={cursos} />
      <Route path="/projects" component={projects} />
      <Route path="/post" component={post} />
		</div>
  );
}