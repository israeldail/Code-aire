import Draggable from 'react-draggable';

export const ScrollTop = () => {
    return (
        <Draggable>
            <div className="scroll-top" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
                style={{
                    position: 'fixed',
                    padding: '1rem 2rem',
                    fontSize: '15px',
                    bottom: '40px',
                    right: '40px',
                    backgroundColor: 'black',
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: '25%',
                    borderRadius: '15%'
                }}>
                <h1>TOP</h1>
            </div>
        </Draggable>
    )
}