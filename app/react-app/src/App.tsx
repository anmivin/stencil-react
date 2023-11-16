import {
  AnmivinButton,
  AnmivinModal,
  AnmivinContextmenu,
  AnmivinTooltip,
  AnmivinAlert,
  AnmivinFormwrapper,
  AnmivinTextfield,
  AnmivinCheckbox,
  defineCustomElements,
} from 'react-library';
import { useState } from 'react';

defineCustomElements();

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [alertOpen, setAlertOpen] = useState(false);
  return (
    <>
      <AnmivinTooltip position="bottom" arrow text="нажмите, чтоб открыть модалку">
        <AnmivinButton
          variant="pressed"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          кнопка
        </AnmivinButton>
      </AnmivinTooltip>
      <AnmivinTooltip position="right" arrow text="нажмите, чтоб открыть алерт">
        <AnmivinButton
          variant="pressed"
          onClick={() => {
            setAlertOpen(true);
          }}
        >
          алерт
        </AnmivinButton>
      </AnmivinTooltip>

      <AnmivinContextmenu
        menuitems={[
          { title: 'firs', action: () => console.log(1) },
          { title: 'sec', action: () => console.log(2) },
        ]}
      />
      <AnmivinModal
        modaltitle="Вот модалка"
        isopen={modalOpen}
        onSubmitModal={() => {
          console.log('submitted');
        }}
        onCloseModal={() => {
          setModalOpen(false);
        }}
        confirmText="Подтвердить"
      >
        Можно открыть и закрыть
      </AnmivinModal>
      <AnmivinAlert
        alerttitle="Это тайтл"
        isopen={alertOpen}
        onClosAlert={() => {
          setAlertOpen(false);
        }}
      >
        вот текст алерта
      </AnmivinAlert>
      <AnmivinFormwrapper onSubmitForm={(e) => console.log(e.detail)}>
        <AnmivinTextfield label="Вот текстфилд" formlabel="text" />
        <AnmivinCheckbox label="Вот чекбокс" formlabel="check" />
      </AnmivinFormwrapper>
    </>
  );
}

export default App;
