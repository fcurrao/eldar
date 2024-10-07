import { CircularProgress } from '@mui/material';
import NotificationAlertGeneral from '../Components/Toasts/NotificationAlertGeneral.tsx';
import ConfirmAlert from '../Components/Toasts/ConfirmAlert.tsx'; 
import { AlertsContainerProps } from '../Interfaces/AlertsContainerProps.ts';

const AlertsContainer: React.FC<AlertsContainerProps> = ({
    isLoading,
    isLoggedIn,
    userRole,
    deleteDialogOpen,
    postToDelete,
    deleteToast,
    handleCancelDelete,
    handlePostDelete
}) => {
    return (
        <>
            {/* loading */}
            {isLoading && (
                <div
                    style={{
                        backgroundColor: '#000000b5',
                        position: 'absolute',
                        width: '100%',
                        height: '-webkit-fill-available',
                        zIndex: '999',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <CircularProgress size={80} color="primary" />
                </div>
            )}

            {/* bienvenida */}
            {!localStorage.getItem('notoficationInit') && isLoggedIn && (
                <NotificationAlertGeneral
                    condition={isLoggedIn}
                    message={`Bienvenido ${userRole}`}
                    severity="success"
                />
            )}

            {/* Confirmacion */}
            <ConfirmAlert
                open={deleteDialogOpen}
                onClose={handleCancelDelete}
                onConfirm={() => handlePostDelete(postToDelete)}
                titleToConf={
                    postToDelete ? `Estas seguro que quieres eliminar el post ${postToDelete.title}` : ''
                }
            />
            
            {/* delete toats */}
            {deleteToast && (
                <NotificationAlertGeneral
                    condition={isLoggedIn}
                    message={`Post eliminado ${postToDelete?.title}`}
                    severity="success"
                />
            )}
        </>
    );
};

export default AlertsContainer;