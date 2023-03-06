import debounce from '../lodashSourceCode/debounce';

const DemoPage = () => {

    const handldClick = () => {
        console.log('click');
    }

    const debounced = debounce(handldClick, 1000, { })

    return (
        <div
            onClick={debounced}
        >
            Click Here
        </div>
    );
}

export default DemoPage;