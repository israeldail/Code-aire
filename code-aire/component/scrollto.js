import Draggable from 'react-draggable';

export const ScrollTop = () => {
    return (
        <Draggable>
            <div className="scroll-top" onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
                style={{
                    position: 'fixed',
                    padding: '5px 25px',
                    fontSize: '15px',
                    bottom: '25px',
                    right: '25px',
                    backgroundColor: 'black',
                    color: '#fff',
                    textAlign: 'center',
                    marginBottom: '25%',
                    borderRadius: '100%',
                    opacity: '75%'
                }}>
                <h1>TOP</h1>
            </div>
        </Draggable>
    )
}