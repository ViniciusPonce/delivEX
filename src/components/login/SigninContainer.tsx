import '../ExploreContainer.css';

interface ContainerProps {
  name: string;
}

const SigninContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>Faça seu cadastro e realize o Login</p>
    </div>
  );
};

export default SigninContainer;