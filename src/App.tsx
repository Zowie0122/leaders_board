import AppContainer from "./components/containers/AppContainer.style";
import GlobalStyle from "./styles/GlobalStyles";
import LeaderBoard from "./pages/leaderBoard";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <LeaderBoard />
    </AppContainer>
  );
}

export default App;
