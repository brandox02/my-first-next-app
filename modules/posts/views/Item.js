import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  const { postId } = router.query;
  return (
    <div>
      <h3>{`Post #${postId}`}</h3>
    </div>
  );
};

export default Index;
