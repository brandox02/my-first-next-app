import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const arr = router.query.various || [];
  return (
    <div>
      <div>
        <h4>Showing the array parameter sended {JSON.stringify(arr)}</h4>
      </div>
      <style jsx>{`* { margin: 20px 0px }`}</style>
    </div>
  );
};

export default Index;
