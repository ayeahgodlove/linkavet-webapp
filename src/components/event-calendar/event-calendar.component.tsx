"use client";
// components/Calendar.tsx
import React, { useCallback, useEffect, useRef, useState } from "react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import { emptyEvent, IEvent } from "@model/event.model";
import { Button, Card, Drawer, Form, message, Modal } from "antd";
import "./event-calendar.scss";
import { useEvent } from "@hook/event.hook";
import EventFormFields from "@components/form-fields/event/event-form-field.component";
import moment from "moment";
import Link from "next/link";

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: React.FC<EventCalendarProps> = ({ events }) => {
  const { addEvent, selectedEvent, setEvent, removeEvent } = useEvent();
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [calendarApi, setCalendarApi] = useState<any>(null);
  const calendarRef = useRef<any>(null);
  const [eventItem, setEventItem] = useState<IEvent>(emptyEvent);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDateSelect = (selectInfo: any) => {
    setOpen(true);

    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (selectedEvent.title) {
      calendarApi.addEvent({
        // id: String(events.length + 1),
        id: selectedEvent.id,
        title: selectedEvent.title,
        start: selectedEvent.start,
        end: selectedEvent.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: any) => {
    clickInfo.jsEvent.preventDefault();

    setEventItem({
      id: clickInfo.event._def.publicId,
      title: clickInfo.event._def.title,
      description: clickInfo.event._def.extendedProps.description,
      url: clickInfo.event._def.url,
      start: clickInfo.event._instance.start,
      end: clickInfo.event._instance.end,
      userId: clickInfo.event._def.extendedProps.userId,
    });
    showModal();
    // clickInfo.event.remove();
  };

  const handleDelete = async () => {
    setIsloading(true);
    const item = events.find((item) => item.id === eventItem.id);
    if (item) {
      await removeEvent(item);
    }
    setIsloading(false);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onFinish = async (values: any) => {
    const obj: IEvent = {
      ...emptyEvent,
      ...values,
    };
    const feedback = await addEvent(obj);
    if (feedback) {
      message.success("Event Created Successfully!");
    } else {
      message.error("Event could not be created!");
    }
  };

  useEffect(() => {
    if (calendarApi === null) {
      setCalendarApi(calendarRef.current.getApi());
    }
  }, [calendarApi]);
  return (
    <>
      <Card bordered={false}>
        <FullCalendar
          ref={calendarRef}
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable
          selectMirror
          dayMaxEvents
          navLinks={true}
          weekends={true}
          events={events}
          select={handleDateSelect}
          eventClick={handleEventClick}
          eventContent={useCallback(
            (eventInfo: any) => {
              return (
                <>
                  <b>{eventInfo.timeText}</b> {" - "}
                  <strong>{eventInfo.event.title}</strong>
                  <p style={{ textWrap: "wrap" }}>
                    {eventInfo.event._def.extendedProps.description.slice(
                      0,
                      50
                    ) + "..."}
                  </p>
                  <strong>Link:</strong>{" "}
                  <Link href={eventInfo.event._def.url} target="blank">
                    {eventInfo.event._def.url}
                  </Link>
                </>
              );
            },
            [setEvent]
          )}
        />
      </Card>
      <Drawer title="Add Event" onClose={onClose} open={open}>
        <Form
          onFinish={onFinish}
          initialValues={{
            ...emptyEvent,
            start: moment(emptyEvent.start),
            end: moment(emptyEvent.end),
          }}
          layout="vertical"
        >
          <EventFormFields />
          <Button
            htmlType="submit"
            type="primary"
            block
            style={{ marginTop: 30 }}
          >
            Add Event
          </Button>
        </Form>
      </Drawer>

      <Modal
        title="Delete Event"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        styles={{
          body: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Button danger onClick={handleDelete} loading={isloading}>
          Delete
        </Button>
      </Modal>
    </>
  );
};

export default EventCalendar;
