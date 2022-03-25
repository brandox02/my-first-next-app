import { Card, CardBody, CardHeader, CardFooter } from 'reactstrap';
import { useAppContext } from 'common/appContext';

const Index = () => {
  const appContext = useAppContext();

  return (
    <div>
      <Card>
        <CardHeader>header</CardHeader>

        <CardBody>boddy</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </div>
  );
};

Index.label = 'Common reacstrap view';

export default Index;
