import { useNavigate, useParams } from 'react-router-dom';
import useDiary from '../hooks/useDiary';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import { getFormattedDate } from '../utils';

const Diary = () => {
    const { id } = useParams();
    const data = useDiary(id);
    console.log(data);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const goEdit = () => {
        navigate(`/edit/${id}`);
    };

    if (!data) return <div>일기를 불러오고 있습니다.</div>;
    else {
        const { date, emotionId, content } = data;
        const title = `${getFormattedDate(new Date(Number(date)))} 일기`;
        return (
            <div>
                <Header
                    title={title}
                    leftChild={<Button text={'< 뒤로가기'} onClick={goBack} />}
                    rightChild={<Button text={'수정하기'} onClick={goEdit} />}
                />
                <Viewer content={content} emotionId={emotionId} />
                <div>Diary</div>
            </div>
        );
    }
};

export default Diary;
