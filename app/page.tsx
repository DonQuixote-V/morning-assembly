
"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardCheck,
  Users,
  GraduationCap,
  CalendarDays,
  FileBarChart,
  Settings,
  Bell,
  Search,
  ChevronDown,
  CheckCircle2,
  XCircle,
  Clock3,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navigation = [
  { label: "ภาพรวม", icon: LayoutDashboard },
  { label: "เช็กชื่อเข้าแถว", icon: ClipboardCheck },
  { label: "นักเรียน", icon: Users },
  { label: "ห้องเรียน", icon: GraduationCap },
  { label: "ตารางเข้าแถว", icon: CalendarDays },
  { label: "รายงาน", icon: FileBarChart },
  { label: "ตั้งค่าระบบ", icon: Settings },
];

const students = [
  { id: "001", name: "กิตติพงษ์ ใจดี", room: "ปวช.3/1", status: "มา" },
  { id: "002", name: "ณัฐพล พรมมา", room: "ปวช.3/1", status: "มา" },
  { id: "003", name: "ธนกร แสงทอง", room: "ปวช.3/1", status: "ขาด" },
  { id: "004", name: "ปภังกร สุขใจ", room: "ปวช.3/1", status: "มา" },
  { id: "005", name: "พีรพัฒน์ คำดี", room: "ปวช.3/1", status: "รอบันทึก" },
];

export default function Home() {
  const [activePage, setActivePage] = useState("ภาพรวม");
  const [search, setSearch] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const filteredStudents = students.filter((student) =>
    `${student.id} ${student.name}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {mobileMenu && (
        <button
          aria-label="ปิดเมนู"
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform lg:translate-x-0 ${
          mobileMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-slate-100 px-6">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <GraduationCap size={25} />
          </div>
          <div>
            <h1 className="font-bold tracking-tight text-slate-900">
              Morning<span className="text-blue-600">Check</span>
            </h1>
            <p className="text-xs text-slate-500">ระบบจัดการการเข้าแถว</p>
          </div>
          <button
            aria-label="ปิดเมนู"
            onClick={() => setMobileMenu(false)}
            className="ml-auto rounded-lg p-2 text-slate-500 lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
            เมนูหลัก
          </p>
          <nav className="space-y-1">
            {navigation.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActivePage(label);
                  setMobileMenu(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                  activePage === label
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <Icon size={19} />
                {label}
                {label === "เช็กชื่อเข้าแถว" && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4">
          <div className="rounded-2xl bg-slate-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 size={17} className="text-emerald-600" />
              ระบบพร้อมใช้งาน
            </div>
            <p className="text-xs leading-5 text-slate-500">
              หน้าจอนี้ใช้ข้อมูลตัวอย่าง ยังไม่ได้เชื่อมต่อฐานข้อมูลจริง
            </p>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">
            MorningCheck · Student Project
          </p>
        </div>
      </aside>

      <main className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-slate-200 bg-white/90 px-4 backdrop-blur sm:px-8">
          <div className="flex items-center gap-3">
            <button
              aria-label="เปิดเมนู"
              onClick={() => setMobileMenu(true)}
              className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} />
            </button>
            <div>
              <h2 className="font-bold text-slate-900">{activePage}</h2>
              <p className="hidden text-xs text-slate-500 sm:block">
                Morning Assembly Attendance Management
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              aria-label="การแจ้งเตือน"
              className="relative rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50"
            >
              <Bell size={19} />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>
            <div className="hidden h-9 w-px bg-slate-200 sm:block" />
            <button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-50">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                A
              </div>
              <div className="hidden text-left sm:block">
                <p className="text-sm font-semibold">ผู้ดูแลระบบ</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <ChevronDown size={16} className="hidden text-slate-400 sm:block" />
            </button>
          </div>
        </header>

        <div className="mx-auto max-w-7xl space-y-7 p-4 sm:p-8">
          <section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-blue-600">
                ADMINISTRATION / OVERVIEW
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                ภาพรวมการเข้าแถว
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                ติดตามสถานะและสรุปข้อมูลการเข้าแถวของนักเรียน
              </p>
            </div>
            <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 sm:self-auto">
              <CalendarDays size={17} className="text-blue-600" />
              ข้อมูลตัวอย่าง
            </div>
          </section>

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "นักเรียนทั้งหมด",
                value: "320",
                note: "ทุกห้องเรียน",
                icon: Users,
                color: "bg-blue-50 text-blue-600",
              },
              {
                label: "มาเข้าแถว",
                value: "286",
                note: "89.4% ของนักเรียน",
                icon: CheckCircle2,
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                label: "ขาดเข้าแถว",
                value: "24",
                note: "7.5% ของนักเรียน",
                icon: XCircle,
                color: "bg-red-50 text-red-600",
              },
              {
                label: "ยังไม่บันทึก",
                value: "10",
                note: "3.1% ของนักเรียน",
                icon: Clock3,
                color: "bg-amber-50 text-amber-600",
              },
            ].map(({ label, value, note, icon: Icon, color }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100/70"
              >
                <div className="flex items-start justify-between">
                  <p className="text-sm font-medium text-slate-500">{label}</p>
                  <div className={`rounded-xl p-2.5 ${color}`}>
                    <Icon size={21} />
                  </div>
                </div>
                <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                  {value}
                </p>
                <p className="mt-2 text-xs text-slate-500">{note}</p>
              </div>
            ))}
          </section>

          <section className="grid gap-5 xl:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100/70 xl:col-span-2 sm:p-6">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="font-bold text-slate-900">
                    สถานะการเข้าแถววันนี้
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">
                    ภาพรวมจากข้อมูลจำลองของนักเรียน 320 คน
                  </p>
                </div>
                <span className="w-fit rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700">
                  ตัวอย่างข้อมูล
                </span>
              </div>

              <div className="mt-7">
                <div className="flex h-3 overflow-hidden rounded-full bg-slate-100">
                  <div className="w-[89.4%] bg-emerald-500" />
                  <div className="w-[7.5%] bg-red-400" />
                  <div className="w-[3.1%] bg-amber-400" />
                </div>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "มา", value: "286 คน", color: "bg-emerald-500" },
                    { label: "ขาด", value: "24 คน", color: "bg-red-400" },
                    { label: "ยังไม่บันทึก", value: "10 คน", color: "bg-amber-400" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                        <span className="text-xs text-slate-500">{item.label}</span>
                      </div>
                      <p className="text-base font-bold text-slate-800 sm:text-lg">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7 rounded-xl bg-blue-50/70 p-4">
                <div className="flex items-start gap-3">
                  <Clock3 size={19} className="mt-0.5 text-blue-600" />
                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      การบันทึกยังไม่เสร็จสมบูรณ์
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-600">
                      มีนักเรียน 10 คนที่ยังไม่มีผลบันทึก ตัวเลขนี้ยังไม่ถือว่าเป็นผู้ขาด
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-100/70 sm:p-6">
              <h2 className="font-bold text-slate-900">ทางลัด</h2>
              <p className="mt-1 text-sm text-slate-500">
                ไปยังส่วนที่ต้องการจัดการ
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { label: "จัดการนักเรียน", desc: "เพิ่มและแก้ไขข้อมูล", icon: Users, page: "นักเรียน" },
                  { label: "ตารางเข้าแถว", desc: "กำหนดวันและเวลา", icon: CalendarDays, page: "ตารางเข้าแถว" },
                  { label: "ดูรายงาน", desc: "สรุปผลการเข้าแถว", icon: FileBarChart, page: "รายงาน" },
                ].map(({ label, desc, icon: Icon, page }) => (
                  <button
                    key={label}
                    onClick={() => setActivePage(page)}
                    className="group flex w-full items-center gap-3 rounded-xl border border-slate-200 p-3 text-left transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <div className="rounded-xl bg-slate-100 p-2.5 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700">
                      <Icon size={19} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">{label}</p>
                      <p className="mt-1 text-xs text-slate-500">{desc}</p>
                    </div>
                    <ArrowUpRight size={17} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-100/70">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:p-6">
              <div>
                <h2 className="font-bold text-slate-900">
                  รายชื่อนักเรียนล่าสุด
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  ข้อมูลจำลองสำหรับตรวจสอบหน้าตาระบบ
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="ค้นหารหัสหรือชื่อ..."
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead className="bg-slate-50 text-xs text-slate-500">
                  <tr>
                    <th className="px-6 py-4 font-medium">รหัสนักเรียน</th>
                    <th className="px-6 py-4 font-medium">ชื่อ - นามสกุล</th>
                    <th className="px-6 py-4 font-medium">ห้องเรียน</th>
                    <th className="px-6 py-4 font-medium">สถานะ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredStudents.map((student) => (
                    <tr key={student.id} className="transition hover:bg-slate-50/70">
                      <td className="px-6 py-4 font-medium text-slate-600">
                        {student.id}
                      </td>
                      <td className="px-6 py-4 font-medium text-slate-800">
                        {student.name}
                      </td>
                      <td className="px-6 py-4 text-slate-500">
                        {student.room}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                            student.status === "มา"
                              ? "bg-emerald-50 text-emerald-700"
                              : student.status === "ขาด"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {student.status === "มา" ? (
                            <CheckCircle2 size={13} />
                          ) : student.status === "ขาด" ? (
                            <XCircle size={13} />
                          ) : (
                            <Clock3 size={13} />
                          )}
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredStudents.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-10 text-center text-slate-500">
                        ไม่พบข้อมูลนักเรียนที่ค้นหา
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="border-t border-slate-100 px-6 py-4 text-xs text-slate-500">
              แสดง {filteredStudents.length} รายการจากข้อมูลตัวอย่าง
            </div>
          </section>

          <footer className="pb-3 text-center text-xs text-slate-400">
            MorningCheck · Morning Assembly Attendance Management Web Application
          </footer>
        </div>
      </main>
    </div>
  );
}
