import classNames from '../snippets/classNames'
import { Day } from './Calendar/monthly'

export default function EventItem({ day }: { day: Day }) {
	return <div
                key={day.date}
                className={classNames(
                  day.isCurrentMonth ? "bg-white" : "bg-gray-50 text-gray-500",
                  "relative px-3 py-2",
                )}
              >
                <time
                  dateTime={day.date}
                  className={
                    day.isToday
                      ? "flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white"
                      : undefined
                  }
                >
                  {day?.date
                    ? day.date?.split("-")?.pop()?.replace(/^0/, "")
                    : ""}
                </time>
                {day.events.length > 0 && (
                  <ol className="mt-2">
                    {day.events.slice(0, 2).map((event) => (
                      <li key={event.id}>
                        <a href={event.href} className="group flex">
                          <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                            {event.name}
                          </p>
                          <time
                            dateTime={event.datetime}
                            className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                          >
                            {event.time}
                          </time>
                        </a>
                      </li>
                    ))}
                    {day.events.length > 2 && (
                      <li className="text-gray-500">
                        + {day.events.length - 2} more
                      </li>
                    )}
                  </ol>
                )}
              </div>
}