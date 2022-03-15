(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{472:function(t,a,s){"use strict";s.r(a);var r=s(54),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程"}},[t._v("#")]),t._v(" 线程")]),t._v(" "),s("h2",{attrs:{id:"为什么要并发编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要并发编程"}},[t._v("#")]),t._v(" 为什么要并发编程")]),t._v(" "),s("p",[t._v("在硬件的快速发展,因此，多核的CPU的背景下，催生了并发编程的趋势，通过并"),s("strong",[t._v("发编程的形式可以将多核CPU的计算能力发挥到极致，性能得到提升")]),t._v("。面对复杂业务模型，并行程序会比串行程序更适应业务需求，而并发编程更能吻合这种业务拆分")]),t._v(" "),s("ul",[s("li",[t._v("充分利用多核CPU的计算能力；")]),t._v(" "),s("li",[t._v("方便进行业务拆分，提升应用性能")])]),t._v(" "),s("h2",{attrs:{id:"并发编程有哪些缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发编程有哪些缺点"}},[t._v("#")]),t._v(" 并发编程有哪些缺点")]),t._v(" "),s("h3",{attrs:{id:"频繁的上下文切换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#频繁的上下文切换"}},[t._v("#")]),t._v(" 频繁的上下文切换")]),t._v(" "),s("p",[t._v("时间片是CPU分配给各个线程的时间,因为时间非常短，所以CPU不断通过切换线程，让我们觉得多个线程是同时执行的，时间片一般是几十毫秒。而每次切换时，需要保存当前的状态起来，以便能够进行恢复先前状态，而这个切换时非常损耗性能，过于频繁反而无法发挥出多线程编程的优势。通常减少上下文切换可以采用无锁并发编程，CAS算法，使用最少的线程和使用协程。")]),t._v(" "),s("ul",[s("li",[t._v("无锁并发编程：可以参照concurrentHashMap锁分段的思想，不同的线程处理不同段的数据，这样在多线程竞争的条件下，可以减少上下文切换的时间。")]),t._v(" "),s("li",[t._v("CAS算法: 利用Atomic下使用CAS算法来更新数据，使用了乐观锁，可以有效的减少一部分不必要的锁竞争带来的上下文切换")]),t._v(" "),s("li",[t._v("使用最少线程：避免创建不需要的线程，比如任务很少，但是创建了很多的线程，这样会造成大量的线程都处于等待状态")]),t._v(" "),s("li",[t._v("协程：在单线程里实现多任务的调度，并在单线程里维持多个任务间的切换")])]),t._v(" "),s("h3",{attrs:{id:"线程安全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程安全"}},[t._v("#")]),t._v(" 线程安全")]),t._v(" "),s("p",[t._v("多线程编程中最难以把握的就是临界区线程安全问题，稍微不注意就会出现死锁的情况，一旦产生死锁就会造成系统功能不可用。")]),t._v(" "),s("p",[t._v("那么，通常可以用如下方式避免死锁的情况：")]),t._v(" "),s("ul",[s("li",[t._v("避免一个线程同时获得多个锁；")]),t._v(" "),s("li",[t._v("避免一个线程在锁内部占有多个资源，尽量保证每个锁只占用一个资源；")]),t._v(" "),s("li",[t._v("尝试使用定时锁，使用lock.tryLock(timeOut)，当超时等待时当前线程不会阻塞；")]),t._v(" "),s("li",[t._v("对于数据库锁，加锁和解锁必须在一个数据库连接里，否则会出现解锁失败的情况")])]),t._v(" "),s("p",[t._v("所以，如何正确的使用多线程编程技术有很大的学问，比如如何保证线程安全，如何正确理解由于JMM内存模型在原子性，有序性，可见性带来的问题，比如数据脏读，DCL等这些问题（在后续篇幅会讲述）。而在学习多线程编程技术的过程中也会让你收获颇丰。")]),t._v(" "),s("h2",{attrs:{id:"应该了解的概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应该了解的概念"}},[t._v("#")]),t._v(" 应该了解的概念")]),t._v(" "),s("h3",{attrs:{id:"同步vs异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步vs异步"}},[t._v("#")]),t._v(" 同步VS异步")]),t._v(" "),s("h3",{attrs:{id:"并发与并行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发与并行"}},[t._v("#")]),t._v(" 并发与并行")]),t._v(" "),s("h3",{attrs:{id:"阻塞和非阻塞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阻塞和非阻塞"}},[t._v("#")]),t._v(" 阻塞和非阻塞")]),t._v(" "),s("h3",{attrs:{id:"临界区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临界区"}},[t._v("#")]),t._v(" 临界区")]),t._v(" "),s("h2",{attrs:{id:"线程的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程的状态"}},[t._v("#")]),t._v(" 线程的状态")])])}),[],!1,null,null,null);a.default=v.exports}}]);