import './App.css';
import { ChatPage } from './pages/ChatPage/ChatPage';
import { ErrorBoundary } from 'components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <ChatPage />
    </ErrorBoundary>
  );
}

export default App;
