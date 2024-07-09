import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";

import { MailService } from "../services/mail.service";
import { RootState } from "@store/store";
import { emptyMail, IMail } from "@model/mail.model";
import {
  addMailSuccess,
  editMailSuccess,
  fetchMailsAsync,
  setActiveMail,
} from "@store/slice/mail.slice";
const useMail = () => {
  const mails = useSelector<RootState, IMail[]>((state) => state.mail.mails);
  const isLoading = useSelector<RootState, boolean>(
    (state) => state.mail.isLoading
  );
  const initialFetch = useSelector<RootState, boolean>(
    (state) => state.mail.initialFetch
  );
  const mail = useSelector<RootState, IMail>((state) => state.mail.mail);

  const dispatch = useDispatch();

  const loadMails = useCallback(() => {
    if (initialFetch) {
      dispatch(fetchMailsAsync() as any);
    }
  }, [dispatch, initialFetch]);

  const addMail = async (mail: IMail) => {
    return await MailService.create(mail)
      .then((mailResponse) => {
        dispatch(addMailSuccess(mailResponse.data));
        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  const setMail = (mail: IMail) => {
    dispatch(setActiveMail(mail));
  };

  const getMail = (mailId: string) => {
    const mail = mails.find((p) => p.id === mailId);
    if (!mail) {
      return emptyMail;
    }
    return mail;
  };

  const editMail = async (mail: IMail) => {
    return await MailService.update(mail)
      .then((mailResponse) => {
        dispatch(editMailSuccess(mailResponse.data));
        setMail(mailResponse.data);
        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  useEffect(() => {
    // loadMails();
  }, [mail, mails, isLoading, initialFetch]);

  return {
    mail,
    mails,
    isLoading,
    initialFetch,
    addMail,
    editMail,
    setMail,
    getMail,
  };
};

export { useMail };
