import styled from 'styled-components';

const ThemedContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) =>
        theme === 'light' ? '#f3e8ff' : '#1a1a1a'}; // Light: lila, Dark: dunkel
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  font-family: 'Segoe UI', Roboto, sans-serif;
  padding: 20px;
`;

export default ThemedContainer;
