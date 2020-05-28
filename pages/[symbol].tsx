import { useRouter } from 'next/router';
import Wrapper from '../components/Wrapper';

const Post = () => {
  const router = useRouter();
  const data = router.query;
  console.log(data);

  return (
    <Wrapper title="Home">
      <div>hi</div>
    </Wrapper>
  );
};

export default Post;
